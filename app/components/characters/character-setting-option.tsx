import { FC } from 'react';
import { ToggleOption } from '~/store';

interface Props {
  checked: boolean;
  title: string;
  onChange: () => void;
}
export const CharacterSettingOption: FC<Props> = ({
  title,
  onChange,
  checked,
}) => {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {title}
    </label>
  );
};
