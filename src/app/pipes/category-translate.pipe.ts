import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryTranslate',
  standalone: true
})
export class CategoryTranslatePipe implements PipeTransform {

  private translations: { [key: string]: string } = {
    'animal': 'Animal',
    'career': 'Carrera',
    'celebrity': 'Celebridad',
    'dev': 'Desarrollador',
    'explicit': 'Explícito',
    'fashion': 'Moda',
    'food': 'Comida',
    'history': 'Historia',
    'money': 'Dinero',
    'movie': 'Película',
    'music': 'Música',
    'political': 'Política',
    'religion': 'Religión',
    'science': 'Ciencia',
    'sport': 'Deporte',
    'travel': 'Viaje'
  };

  /**
   * Traduce el valor recibido al español si existe una traducción disponible.
   * Si no se encuentra una traducción, retorna el valor original con la primera
   * letra en mayúscula como formato de respaldo.
   *
   * @param value string -> Categoría  
   * @returns string -> Traducida 
   */
  transform(value: string): string {
    const translated = this.translations[value.toLowerCase()];
    return translated ? translated : value.charAt(0).toUpperCase() + value.slice(1);
  }

}
