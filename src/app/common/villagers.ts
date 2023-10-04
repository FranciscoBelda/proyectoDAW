export interface Villager {
  url: string
  name: string
  alt_name: string
  title_color: string
  text_color: string
  id: string
  image_url: string
  species: string
  personality: string
  gender: string
  birthday_month: string
  birthday_day: string
  sign: string
  quote: string
  phrase: string
  prev_phrases: string[]
  clothing: string
  islander: boolean
  debut: string
  appearances: string[]
  nh_details: NhDetails
}

export interface NhDetails {
  image_url: string
  photo_url: string
  icon_url: string
  quote: string
  "sub-personality": string
  catchphrase: string
  clothing: string
  clothing_variation: string
  fav_styles: string[]
  fav_colors: string[]
  hobby: string
  house_interior_url: string
  house_exterior_url: string
  house_wallpaper: string
  house_flooring: string
  house_music: string
  house_music_note: string
}
