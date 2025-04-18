import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 12.5246H22V15.5246H20.5V12.5246ZM18 12.5246H19.5V15.5246H18V12.5246ZM17 12.5246H14.66L17 14.8646V12.5246ZM14.5 8.17461H16.03C17.08 8.17461 18 8.91461 18 10.2246V11.5246H19.5V9.88461C19.5 8.07461 17.9 6.72461 16.03 6.72461H14.5C13.48 6.72461 12.65 5.74461 12.65 4.72461C12.65 3.70461 13.48 2.97461 14.5 2.97461V1.47461C12.65 1.47461 11.15 2.97461 11.15 4.82461C11.15 6.67461 12.65 8.17461 14.5 8.17461ZM18.85 4.25461C19.47 3.64461 19.85 2.80461 19.85 1.87461H18.35C18.35 2.89461 17.52 3.72461 16.5 3.72461V5.22461C18.74 5.22461 20.5 7.05461 20.5 9.29461V11.5246H22V9.28461C22 7.06461 20.72 5.14461 18.85 4.25461ZM3.41 4.11461L2 5.52461L9 12.5246H2V15.5246H12L19 22.5246L20.41 21.1146L3.41 4.11461Z" />
    </Svg>
  )
}

Icon.displayName = 'SmokeFree'

/**
 * Material Icon: Smoke Free
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:smoke_free Material Icon Docs}
 */
export const SmokeFree = memo(Icon)
