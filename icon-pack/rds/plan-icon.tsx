import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg fill={color} viewBox="0 0 21 20" height={size} width={size} {...otherProps}>
      <Path d="M15.772 3.047c.52 0 .992.304 1.208.776l.01.022 1.301 2.99v10.118H2.041V6.84l1.261-2.981.01-.023a1.328 1.328 0 0 1 1.213-.788h11.247ZM3.447 7.125v8.422h13.438V7.128L15.72 4.453H4.577l-1.13 2.672Zm11.797-.855v1.407L5.088 7.676V6.269l10.156.001Z" />
      <Path d="M15.87 3.05c.48.035.908.33 1.11.772l.01.023 1.301 2.99v10.118H2.041V6.84l1.261-2.982.01-.022c.2-.449.63-.75 1.116-.785l.098-.003h11.246l.097.003Zm-11.344.164c-.46 0-.875.27-1.062.687l-.009.023-1.247 2.95v9.912h15.916V6.87l-1.287-2.957-.01-.021a1.16 1.16 0 0 0-1.055-.677H4.526ZM3.28 7.09l.013-.031 1.174-2.774H15.83l.043.1 1.179 2.708v8.62H3.28V7.09Zm11.964-.82v1.406H5.088V6.27h10.156Zm-9.99 1.238h9.823V6.436H5.255V7.51Zm-1.807 8.038h13.438V7.128L15.72 4.453H4.578l-1.13 2.672v8.422Z" />
    </Svg>
  )
}

Icon.displayName = 'PlanIcon'

export const PlanIcon = memo(Icon)
