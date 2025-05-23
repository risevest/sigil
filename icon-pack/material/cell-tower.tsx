import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M7.3 14.2502L8.5 13.0502C7.5 12.0502 7 10.7502 7 9.5502C7 8.2502 7.5 6.9502 8.5 6.0502L7.3 4.8502C6 6.1502 5.3 7.85019 5.3 9.5502C5.3 11.2502 6 12.9502 7.3 14.2502Z"
        fill={color}
      />
      <Path
        d="M19.1 2.4502L17.9 3.6502C19.5 5.2502 20.3 7.4502 20.3 9.5502C20.3 11.6502 19.5 13.8502 17.9 15.4502L19.1 16.6502C21.1 14.6502 22 12.1502 22 9.5502C22 6.9502 21 4.4502 19.1 2.4502Z"
        fill={color}
      />
      <Path
        d="M6.1 3.6502L4.9 2.4502C3 4.4502 2 6.9502 2 9.5502C2 12.1502 3 14.6502 4.9 16.6502L6.1 15.4502C4.5 13.8502 3.7 11.6502 3.7 9.5502C3.7 7.4502 4.5 5.2502 6.1 3.6502Z"
        fill={color}
      />
      <Path
        d="M16.7 14.2502C18 12.9502 18.7 11.2502 18.7 9.5502C18.6 7.85019 18 6.1502 16.7 4.8502L15.5 6.0502C16.5 7.0502 17 8.35019 17 9.5502C17 10.8502 16.5 12.1502 15.5 13.0502L16.7 14.2502Z"
        fill={color}
      />
      <Path
        d="M14.5 9.5502C14.5 8.1702 13.38 7.0502 12 7.0502C10.62 7.0502 9.5 8.1702 9.5 9.5502C9.5 10.3102 9.84 10.9702 10.37 11.4302L7 21.5502H9L9.67 19.5502H14.34L15 21.5502H17L13.63 11.4302C14.16 10.9702 14.5 10.3102 14.5 9.5502ZM10.33 17.5502L12 12.5502L13.67 17.5502H10.33Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CellTower'

/**
 * Material Icon: Cell Tower
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cell_tower Material Icon Docs}
 */
export const CellTower = memo(Icon)
