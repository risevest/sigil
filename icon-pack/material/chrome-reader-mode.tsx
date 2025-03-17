import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM3 18.5V5.5H11V18.5H3ZM21 18.5H13V5.5H21V18.5ZM14 9H20V10.5H14V9ZM14 11.5H20V13H14V11.5ZM14 14H20V15.5H14V14Z" />
    </Svg>
  )
}

Icon.displayName = 'ChromeReaderMode'

/**
 * Material Icon: Chrome Reader Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:chrome_reader_mode Material Icon Docs}
 */
export const ChromeReaderMode = memo(Icon)
