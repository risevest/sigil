import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.79225 19.4L4.13225 19.96V10.93L1.70225 16.79C1.29225 17.81 1.78225 18.98 2.79225 19.4ZM22.2922 15.7L17.3322 3.73C17.0222 2.98 16.2922 2.52 15.5222 2.5C15.2622 2.5 14.9922 2.54 14.7322 2.65L7.36225 5.7C6.61225 6.01 6.15225 6.73 6.13225 7.5C6.12224 7.77 6.17225 8.04 6.28225 8.3L11.2422 20.27C11.5522 21.03 12.2922 21.49 13.0722 21.5C13.3322 21.5 13.5922 21.45 13.8422 21.35L21.2022 18.3C22.2222 17.88 22.7122 16.71 22.2922 15.7ZM13.0922 19.5L8.13225 7.54L15.4822 4.5H15.4922L20.4422 16.45L13.0922 19.5Z" />
      <Path d="M11.2622 9.75C11.8145 9.75 12.2622 9.30228 12.2622 8.75C12.2622 8.19772 11.8145 7.75 11.2622 7.75C10.71 7.75 10.2622 8.19772 10.2622 8.75C10.2622 9.30228 10.71 9.75 11.2622 9.75Z" />
      <Path d="M6.14225 19.5C6.14225 20.6 7.04225 21.5 8.14225 21.5H9.59225L6.14225 13.16V19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Style'

/**
 * Material Icon: Style
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:style Material Icon Docs}
 */
export const Style = memo(Icon)
