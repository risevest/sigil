import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M12 2a7 7 0 0 0-6.903 8.166c.057.342.187.677.383.975.316.637.782 1.207 1.383 1.744l.16.14c.45.393.977.853.977 1.475v.053c.38-.341.777-.647 1.147-.92.155-.116.302-.222.441-.324.29-.21.547-.398.787-.59l.21-.168c1.46-1.166 2.182-1.742 2.445-2.794.181-.724.002-1.133-.19-1.36A1.15 1.15 0 0 0 12 8a1 1 0 0 0-.969.75 1 1 0 1 1-1.936-.5A3 3 0 0 1 12 6c.829 0 1.739.366 2.364 1.103.657.773.925 1.864.606 3.14-.434 1.736-1.701 2.737-2.983 3.75l-.362.288c-.277.221-.596.453-.905.678l-.383.28c-.435.323-.846.645-1.204.992-.656.636-1.066 1.288-1.126 2.07C8.123 20.622 9.561 22 11 22c2.156 0 3.833-1.5 3.998-3.932.085-1.263.53-2.14 1.101-2.939.244-.341.51-.667.774-.993.425-.524.85-1.048 1.19-1.635A7 7 0 0 0 12 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EarFill'

/**
 * MingCute Icon: Ear Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EarFill = memo(Icon)
