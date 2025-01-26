import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.5 2C6.567 2 5 3.567 5 5.5C5 5.68016 5.01364 5.85714 5.03993 6.02997C3.32436 6.25523 2 7.72295 2 9.5C2 10.4793 2.40223 11.3647 3.05051 12C2.40223 12.6353 2 13.5207 2 14.5C2 15.9018 2.82359 17.1104 4.01353 17.6693C4.00457 17.7785 4 17.8888 4 18C4 20.2091 5.79086 22 8 22C9.19469 22 10.2671 21.4762 11 20.6458V3.05051C10.3647 2.40223 9.47934 2 8.5 2ZM13 3.05051V20.6458C13.7329 21.4762 14.8053 22 16 22C18.2091 22 20 20.2091 20 18C20 17.8888 19.9954 17.7785 19.9865 17.6693C21.1764 17.1104 22 15.9018 22 14.5C22 13.5207 21.5978 12.6353 20.9495 12C21.5978 11.3647 22 10.4793 22 9.5C22 7.72295 20.6756 6.25523 18.9601 6.02997C18.9864 5.85714 19 5.68016 19 5.5C19 3.567 17.433 2 15.5 2C14.5207 2 13.6353 2.40223 13 3.05051Z" />
    </Svg>
  )
}

Icon.displayName = 'Brain2Fill'

/**
 * Remix Icon: Brain 2 Fill
 * @see {@link https://remixicon.com/icon/brain-2-fill Remix Icon Docs}
 */
export const Brain2Fill = memo(Icon)
