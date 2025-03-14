import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_4019_16760)">
        <Path d="M12.9285 15.8152H10.8795L10.7202 2.99316H13.1007L12.9285 15.8152ZM10.6343 19.717C10.6343 19.3492 10.7468 19.0402 10.9718 18.7908C11.1964 18.5414 11.5298 18.4165 11.9715 18.4165C12.4133 18.4165 12.7489 18.5414 12.9777 18.7908C13.2068 19.0402 13.3212 19.3492 13.3212 19.717C13.3212 20.0853 13.2068 20.3898 12.9777 20.6313C12.7489 20.8724 12.4133 20.9932 11.9715 20.9932C11.5298 20.9932 11.1964 20.8724 10.9718 20.6313C10.7468 20.3898 10.6343 20.0853 10.6343 19.717Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4019_16760">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ExclamationMarkSignAlertWarningLine'

export const ExclamationMarkSignAlertWarningLine = memo(Icon)
