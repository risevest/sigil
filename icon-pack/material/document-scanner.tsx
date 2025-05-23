import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M7 3H4V6H2V1H7V3ZM22 6V1H17V3H20V6H22ZM7 21H4V18H2V23H7V21ZM20 18V21H17V23H22V18H20ZM17 6H7V18H17V6ZM19 18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V6C5 4.9 5.9 4 7 4H17C18.1 4 19 4.9 19 6V18ZM15 8H9V10H15V8ZM15 11H9V13H15V11ZM15 14H9V16H15V14Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'DocumentScanner'

/**
 * Material Icon: Document Scanner
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:document_scanner Material Icon Docs}
 */
export const DocumentScanner = memo(Icon)
