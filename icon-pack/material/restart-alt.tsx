import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 13.2852C6 11.6352 6.67 10.1352 7.76 9.04516L6.34 7.62516C4.9 9.07516 4 11.0752 4 13.2852C4 17.3652 7.05 20.7252 11 21.2152V19.1952C8.17 18.7152 6 16.2552 6 13.2852ZM20 13.2852C20 8.86516 16.42 5.28516 12 5.28516C11.94 5.28516 11.88 5.29516 11.82 5.29516L12.91 4.20516L11.5 2.78516L8 6.28516L11.5 9.78516L12.91 8.37516L11.83 7.29516C11.89 7.29516 11.95 7.28516 12 7.28516C15.31 7.28516 18 9.97516 18 13.2852C18 16.2552 15.83 18.7152 13 19.1952V21.2152C16.95 20.7252 20 17.3652 20 13.2852Z" />
    </Svg>
  )
}

Icon.displayName = 'RestartAlt'

/**
 * Material Icon: Restart Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:restart_alt Material Icon Docs}
 */
export const RestartAlt = memo(Icon)
