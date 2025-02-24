import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 14 14" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M3.01664 5.4771L2.91773 0.213741H0V14H3.01664V8.57634C3.09082 4.38168 4.5744 3.01908 8.55537 2.75191V0C4.99475 0 3.68425 1.46947 3.11554 5.4771H3.01664Z"
        fill={color}
      />
      <Path
        d="M14 1.75C14 2.7165 13.3036 3.5 12.4445 3.5C11.5854 3.5 10.889 2.7165 10.889 1.75C10.889 0.783502 11.5854 0 12.4445 0C13.3036 0 14 0.783502 14 1.75Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'RiseR'

export const RiseR = memo(Icon)
