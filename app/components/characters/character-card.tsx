import { FC } from 'react';
import { Character } from '~/interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { useCharacterSettingsStore } from '~/store';

interface Props {
  character: Character;
}
export const CharacterCard: FC<Props> = ({ character }) => {
  const { options } = useCharacterSettingsStore();
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span>{character.name}</span>
        </CardTitle>
        <CardDescription>
          {options.showHomeworld && (
            <span>Home World: {character.homeworld}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {options.showGender && <p>Gender: {character.gender}</p>}
        {options.showHeight && <p>height: {character.height}</p>}
        {options.showMass && <p>Mass: {character.mass}</p>}
        {options.showHairColor && <p>hair color: {character.hair_color}</p>}
        {options.showSkinColor && <p>skin color: {character.skin_color}</p>}
        {options.showEyeColor && <p>eye color: {character.eye_color}</p>}
        {options.showBirthYear && <p>birth year: {character.birth_year}</p>}
      </CardContent>
    </Card>
  );
};
