import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-2.977 9.5a5.32 5.32 0 0 0 0 1H12a1 1 0 1 1 0 2H9.686c.601.945 1.52 1.5 2.432 1.5.55 0 .917-.106 1.204-.262.3-.162.58-.415.913-.81a1 1 0 0 1 1.53 1.287c-.41.488-.88.95-1.49 1.281-.622.338-1.326.504-2.157.504-2.162 0-3.867-1.495-4.65-3.5H7a1 1 0 1 1 0-2h.018a6.923 6.923 0 0 1 0-1H7a1 1 0 1 1 0-2h.468C8.251 7.495 9.956 6 12.118 6c.831 0 1.535.166 2.157.504.61.33 1.08.793 1.49 1.281a1 1 0 1 1-1.53 1.287c-.333-.395-.614-.648-.913-.81-.287-.156-.653-.262-1.204-.262-.912 0-1.83.554-2.432 1.5H12a1 1 0 1 1 0 2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyEuroFill'

/**
 * MingCute Icon: Currency Euro Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyEuroFill = memo(Icon)
