export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Color {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface SimplePokemonInfo {
  name: string;
  url: string;
}

export interface DamageRelation {
  double_damage_from: Array<{ name: string; url: string }>;
  double_damage_to: Array<{ name: string; url: string }>;
  half_damage_from: Array<{ name: string; url: string }>;
  half_damage_to: Array<{ name: string; url: string }>;
}

export interface EvolutionDetail {
  min_level: number;
  trigger: {
    name: string;
    url: string;
  };
}

export interface Chain {
  is_baby: boolean;
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionTo[];
  species: {
    name: string;
    url: string;
  };
}

export interface EvolutionTo {
  evolution_details: EvolutionDetail[];
  is_baby: boolean;
  evolves_to: EvolutionTo[];
  species: {
    name: string;
    url: string;
  };
}
export interface ListResponse {
  count: number;
  results: SimplePokemonInfo[];
}

export interface PokemonResponse {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  base_experience: number;
  height: number;
  weight: number;
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
}

export interface SpeciesResponse {
  id: number;
  name: string;
  order: number;
  names: Name[];
  color: Color;
  flavor_text_entries: FlavorTextEntry[];
  growth_rate: GrowthRate;
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain: {
    url: string;
  };
}

export interface AbilityResponse {
  id: number;
  name: string;
  names: Name[];
  is_main_series: boolean;
  effect_entries: EffectEntry[];
}

export interface TypeResponse {
  id: number;
  name: string;
  damage_relations: DamageRelation;
}

export interface EvolutionChainResponse {
  id: number;
  chain: Chain;
}
