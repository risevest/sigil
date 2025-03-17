import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.705 13.3447V5.34473C16.705 3.58473 18.945 1.34473 21.705 1.34473V17.5147L19.705 15.5147V13.3447H16.705ZM21.195 22.6547L10.725 12.1947C10.395 12.2847 10.065 12.3447 9.70502 12.3447V21.3447H7.70502V12.3447C5.49502 12.3447 3.70502 10.5547 3.70502 8.34473V5.17473L1.39502 2.85473L2.80502 1.44473L22.605 21.2447L21.195 22.6547ZM6.87502 8.34473L5.70502 7.17473V8.34473H6.87502ZM9.70502 1.34473H7.70502V3.51473L9.70502 5.51473V1.34473ZM13.705 8.34473V1.34473H11.705V7.51473L13.555 9.36473C13.645 9.03473 13.705 8.70473 13.705 8.34473Z" />
    </Svg>
  )
}

Icon.displayName = 'NoMeals'

/**
 * Material Icon: No Meals
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_meals Material Icon Docs}
 */
export const NoMeals = memo(Icon)
