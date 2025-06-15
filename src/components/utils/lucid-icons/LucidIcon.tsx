import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

type Props = {
  iconName: IconName;
  size?: number;
  color?: string;
};

const LucidIcon = ({
  iconName = 'replace',
  color = 'white',
  size = 20,
}: Props) => {
  return (
    <>
      <DynamicIcon name={iconName} color={color} size={size} />
    </>
  );
};

export default LucidIcon;
