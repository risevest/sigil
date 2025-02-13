import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 32 32" fill="none" height={size} width={size} {...otherProps}>
      <Rect width="32" height="32" rx="16" fill="#006D79" />
      <Path
        d="M13.0166 14.4771L12.9177 9.21374H10V23H13.0166V17.5763C13.0908 13.3817 14.5744 12.0191 18.5554 11.7519V9C14.9948 9 13.6843 10.4695 13.1155 14.4771H13.0166Z"
        fill="white"
      />
      <Path
        d="M24 10.75C24 11.7165 23.3036 12.5 22.4445 12.5C21.5854 12.5 20.889 11.7165 20.889 10.75C20.889 9.7835 21.5854 9 22.4445 9C23.3036 9 24 9.7835 24 10.75Z"
        fill="white"
      />
    </Svg>
  )
}

Icon.displayName = 'RiseLogo'

export const RiseLogo = memo(Icon)
