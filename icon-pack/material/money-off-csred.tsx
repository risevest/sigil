import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.425 6.9C14.205 6.9 14.865 7.75 14.925 9H17.135C17.065 7.28 16.015 5.7 13.925 5.19V3H10.925V5.16C10.535 5.24 10.175 5.37 9.825 5.52L11.335 7.03C11.655 6.95 12.025 6.9 12.425 6.9ZM5.395 3.92L3.985 5.33L7.425 8.77C7.425 10.85 8.985 11.99 11.335 12.68L14.845 16.19C14.505 16.68 13.795 17.1 12.425 17.1C10.365 17.1 9.555 16.18 9.445 15H7.245C7.365 17.19 9.005 18.42 10.925 18.83V21H13.925V18.85C14.885 18.67 15.755 18.3 16.385 17.73L18.605 19.95L20.015 18.54L5.395 3.92Z" />
    </Svg>
  )
}

Icon.displayName = 'MoneyOffCsred'

/**
 * Material Icon: Money Off Csred
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:money_off_csred Material Icon Docs}
 */
export const MoneyOffCsred = memo(Icon)
