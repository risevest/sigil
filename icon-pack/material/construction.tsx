import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.9038 13.1607L13.7825 15.282L19.7788 21.2782L21.9001 19.1569L15.9038 13.1607Z" />
      <Path d="M17.4999 10.1102C19.4299 10.1102 20.9999 8.54016 20.9999 6.61016C20.9999 6.03016 20.8399 5.49016 20.5899 5.01016L17.8899 7.71016L16.3999 6.22016L19.0999 3.52016C18.6199 3.27016 18.0799 3.11016 17.4999 3.11016C15.5699 3.11016 13.9999 4.68016 13.9999 6.61016C13.9999 7.02016 14.0799 7.41016 14.2099 7.77016L12.3599 9.62016L10.5799 7.84016L11.2899 7.13016L9.87985 5.72016L11.9999 3.60016C10.8299 2.43016 8.92985 2.43016 7.75985 3.60016L4.21985 7.14016L5.62985 8.55016H2.80985L2.09985 9.26016L5.63985 12.8002L6.34985 12.0902V9.26016L7.75985 10.6702L8.46985 9.96016L10.2499 11.7402L2.83985 19.1502L4.95985 21.2702L16.3399 9.90016C16.6999 10.0302 17.0899 10.1102 17.4999 10.1102Z" />
    </Svg>
  )
}

Icon.displayName = 'Construction'

/**
 * Material Icon: Construction
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:construction Material Icon Docs}
 */
export const Construction = memo(Icon)
