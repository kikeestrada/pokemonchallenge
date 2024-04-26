import { ToggleOption, useCharacterSettingsStore } from '~/store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { CharacterSettingOption } from './character-setting-option';
export const CharacterSettingsModal = () => {
  const { options, setOptions } = useCharacterSettingsStore();

  const toggleOption: ToggleOption = (option) => {
    setOptions({ [option]: !options[option] });
  };
  return (
    <Dialog>
      <DialogTrigger className="rounded border border-gray-800 p-2">
        Open Settings
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Characters Information to see</DialogTitle>
          <DialogDescription>
            Here you can modify the information from the characters that you
            will see.
          </DialogDescription>
          <div className="grid grid-cols-2 gap-2">
            <CharacterSettingOption
              onChange={() => toggleOption('showHomeworld')}
              title="Show Home World"
              checked={options.showHomeworld}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showHeight')}
              title="Show Height"
              checked={options.showHeight}
            />

            <CharacterSettingOption
              onChange={() => toggleOption('showGender')}
              title="Show Gender"
              checked={options.showGender}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showMass')}
              title="Show Mass"
              checked={options.showMass}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showHairColor')}
              title="Show Hair Color"
              checked={options.showHairColor}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showSkinColor')}
              title="Show Skin Color"
              checked={options.showSkinColor}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showBirthYear')}
              title="Show Birth Year"
              checked={options.showBirthYear}
            />
            <CharacterSettingOption
              onChange={() => toggleOption('showEyeColor')}
              title="Show Eye Color"
              checked={options.showEyeColor}
            />
          </div>
          <DialogFooter></DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
