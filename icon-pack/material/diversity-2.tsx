import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_4403)">
        <Path d="M10.0962 15.8902L11.5162 14.4702C8.78621 12.0402 6.9962 10.4002 6.9962 8.84023C6.9962 7.79023 7.7962 6.99023 8.8462 6.99023C9.9562 6.99023 10.3862 7.64023 11.5262 8.99023H12.4562C13.5762 7.68023 13.9862 6.99023 15.1362 6.99023C16.0062 6.99023 16.6862 7.53023 16.9062 8.31023C17.2562 8.27023 17.5862 8.25023 17.9062 8.25023C18.2662 8.25023 18.6062 8.28023 18.9362 8.33023C18.6962 6.42023 17.1262 4.99023 15.1462 4.99023C15.0262 4.99023 14.9162 5.02023 14.7962 5.03023C14.9162 4.70023 14.9962 4.36023 14.9962 3.99023C14.9962 2.33023 13.6562 0.990234 11.9962 0.990234C10.3362 0.990234 8.9962 2.33023 8.9962 3.99023C8.9962 4.36023 9.0762 4.70023 9.1962 5.03023C9.0762 5.02023 8.9662 4.99023 8.8462 4.99023C6.6862 4.99023 4.9962 6.68023 4.9962 8.84023C4.9962 11.2602 7.0362 13.1502 10.0962 15.8902Z" />
        <Path d="M22.4962 16.2302C22.1762 16.0502 21.8362 15.9402 21.4962 15.8802C21.5662 15.7802 21.6462 15.7002 21.7062 15.6002C22.7862 13.7302 22.1662 11.4202 20.2962 10.3402C18.2062 9.13023 15.5362 9.95023 11.6462 11.2402L12.1662 13.1802C15.6362 12.0402 17.9562 11.3002 19.3062 12.0802C20.2162 12.6102 20.5062 13.6902 19.9862 14.6102C19.4262 15.5702 18.6562 15.6102 16.9162 15.9302L16.4462 16.7402C17.0262 18.3602 17.4162 19.0702 16.8362 20.0602C16.3062 20.9702 15.2262 21.2602 14.3062 20.7402C14.2462 20.7102 14.1962 20.6502 14.1362 20.6102C13.8362 21.2802 13.4962 21.8502 13.1062 22.3402C13.1762 22.3802 13.2362 22.4302 13.3062 22.4802C15.1762 23.5602 17.4862 22.9402 18.5662 21.0702C18.6262 20.9702 18.6562 20.8602 18.7062 20.7502C18.9262 21.0202 19.1862 21.2602 19.5062 21.4402C20.9362 22.2702 22.7762 21.7802 23.6062 20.3402C24.4362 18.9002 23.9262 17.0502 22.4962 16.2302Z" />
        <Path d="M12.3162 14.0002C11.5762 17.5802 11.0462 19.9502 9.6962 20.7302C8.7862 21.2602 7.6962 20.9702 7.1662 20.0502C6.6062 19.0902 6.9662 18.3902 7.5562 16.7302L7.0962 15.9202C5.3962 15.6102 4.5962 15.5902 4.0262 14.6002C3.4962 13.6902 3.7862 12.6002 4.7062 12.0702C4.7962 12.0202 4.8962 11.9902 4.9962 11.9602C4.6462 11.4002 4.3562 10.7902 4.1762 10.1102C4.0162 10.1802 3.8562 10.2502 3.6962 10.3402C1.8262 11.4202 1.2062 13.7302 2.2862 15.6002C2.3462 15.7002 2.4262 15.7802 2.4962 15.8802C2.1562 15.9402 1.8162 16.0502 1.4962 16.2302C0.066204 17.0602 -0.433796 18.8902 0.396204 20.3302C1.2262 21.7702 3.0562 22.2602 4.4962 21.4302C4.8162 21.2502 5.0762 21.0102 5.2962 20.7402C5.3462 20.8502 5.3762 20.9602 5.4362 21.0602C6.5162 22.9302 8.8262 23.5502 10.6962 22.4702C12.7862 21.2602 13.4062 18.5402 14.2462 14.5302L12.3162 14.0002Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_4403">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Diversity2'

/**
 * Material Icon: Diversity 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:diversity_2 Material Icon Docs}
 */
export const Diversity2 = memo(Icon)
