import React, { Component } from 'react';
import User from '../interfaces/User.interface';

interface SearchState {
    error: boolean,
    pokemon: Pokemon
}

interface Pokemon {
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    imageLink: string
}

export class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User) {
        super(props);
        this.state = {
            error: false,
            pokemon: null
        };
        this.pokemonRef = React.createRef();
    }
    onSearchClick = (): void => {
        const inputValue = this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((res) => {
                if (res.status !== 200) {
                    this.setState({ error: true });
                    return;
                }
                res.json().then(data => {
                    this.setState({
                        error: false,
                        pokemon: {
                            name: data.name,
                            numberOfAbilities: data.abilities.length,
                            baseExperience: data.base_experience,
                            imageLink: data.sprites.front_default,
                        }
                    })
                })

            })
    }
    render() {
        const { name: userName, numberOfPokemons } = this.props;
        const {
            error,
            pokemon
        } = this.state;

        let resultMarkup;

        if (error) {
            resultMarkup = <p>Pokemon not found, please try again.</p>
        } else if (this.state.pokemon) {
            resultMarkup = <section>
                <img src={pokemon.imageLink} alt={pokemon.name} className="pokemon-image"></img>
                <p>
                    <span className="pokemon-name">{pokemon.name}</span> has {pokemon.numberOfAbilities} abilities and {pokemon.baseExperience} base experience points.
                </p>
            </section>
        }

        return (
            <div>
                <p>Pokemon Search</p>
                <input type="text" ref={this.pokemonRef} />
                <button type="button" onClick={this.onSearchClick} className="my-button">
                    Search
            </button>
                {resultMarkup}
            </div>
        );
    }
}

export default PokemonSearch
