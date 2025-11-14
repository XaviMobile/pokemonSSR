import { Component, effect, inject, signal } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list.component/pokemon-list.component';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'app-pokemons-page',
  imports: [
    PokemonListComponent,
    RouterLink
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
})
export class PokemonsPageComponent {
  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);

  private title = inject(Title);

  public currentPage = toSignal<number>(
    this.route.params.pipe(
      map((params) => params['page'] ?? '1'),
      map((page) => (isNaN(+page) ? 1 : + page)),
      map((page) => Math.max(1, page))
    )
  );

  public loadOnPageChanged = effect(
    () => {
      this.loadPokemons(this.currentPage());
    }
  );

  public loadPokemons(page = 0) {
    this.pokemonsService
      .loadPage(page)
      .pipe(tap(() => this.title.setTitle(`Pokémons SSR - Page ${page}`)))
      .subscribe((pokemons: SimplePokemon[]) => {
        this.pokemons.set(pokemons);
      });
  }
}
