import { apiInstance } from '~/api';
import { Character } from '~/interfaces';
import { PeopleResponse } from '~/models/response/people-response';

export const getCharacters = async (): Promise<Character[]> => {
  return apiInstance
    .get<PeopleResponse>('/people')
    .then(({ data }) =>
      data.results.map((person) => {
        const character: Character = { ...person };
        return character;
      }),
    )
    .catch((error) => {
      console.log(error);
      return [];
    });
};
