import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.77997 4V5.38C8.94997 5.05 8.05997 4.88 7.16997 4.88C5.37997 4.88 3.58997 5.56 2.21997 6.93L5.54997 10.26H6.65997V11.37C7.51997 12.23 8.63997 12.68 9.76997 12.73V15H6.77997V18C6.77997 19.1 7.67997 20 8.77997 20H18.78C20.44 20 21.78 18.66 21.78 17V4H9.77997ZM8.66997 10.41V8.26H6.38997L5.34997 7.22C5.91997 7 6.53997 6.88 7.16997 6.88C8.50997 6.88 9.75997 7.4 10.71 8.34L12.12 9.75L11.92 9.95C11.41 10.46 10.73 10.75 9.99997 10.75C9.52997 10.75 9.06997 10.63 8.66997 10.41ZM19.78 17C19.78 17.55 19.33 18 18.78 18C18.23 18 17.78 17.55 17.78 17V15H11.78V12.41C12.35 12.18 12.88 11.84 13.34 11.38L13.54 11.18L16.37 14H17.78V12.59L11.78 6.62V6H19.78V17Z" />
    </Svg>
  )
}

Icon.displayName = 'HistoryEdu'

/**
 * Material Icon: History Edu
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:history_edu Material Icon Docs}
 */
export const HistoryEdu = memo(Icon)
