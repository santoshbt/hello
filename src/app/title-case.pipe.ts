import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: String): any {
    if(!value) return null;
   

    let words = value.split(' ');
    for(var i=0; i < words.length; i++){
      let word = words[i];
      if (i > 0 && this.isPrepostion(word)){
        words[i] = word.toLocaleLowerCase();
      }
      else{
        words[i] = this.toTitleCase(word);
      }  
      }
      return words.join(' ');
    }

    private isPrepostion(word: string): boolean{
      let prepositions = [
        'of',
        'the'
    ]
    return prepositions.includes(word.toLowerCase());
    }

    private toTitleCase(word: string): string{
      return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
   
  }


