import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 3c2.225 0 4.263.808 5.833 2.146.931-.22 1.785-.322 2.507-.26.76.064 1.603.337 2.052 1.114.407.704.352 1.49.076 2.204-.272.702-.787 1.427-1.481 2.163l-.114.12a9 9 0 0 1-14.62 8.44l-.16.04c-.985.233-1.87.317-2.615.2-.757-.118-1.465-.465-1.87-1.167-.45-.777-.264-1.644.06-2.334.308-.655.823-1.344 1.479-2.04A9 9 0 0 1 12 3M3.345 17.009c-.143-.709 1-1.75 1.406-2.167a1.53 1.53 0 0 0 .4-1.386 7 7 0 0 1 11.531-6.66 1.53 1.53 0 0 0 1.402.348c.563-.144 2.039-.613 2.581-.135.336.704-.971 1.832-1.38 2.239a4.684 4.684 0 0 0-.01.01c-1.236 1.23-3.281 2.746-6.275 4.474-2.992 1.728-5.326 2.74-7.01 3.197l-.015.004c-.527.143-2.209.689-2.63.076m5.288 1.13c1.538-.614 3.33-1.499 5.367-2.675 2.036-1.175 3.698-2.284 4.998-3.31A7 7 0 0 1 8.633 18.14Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PlanetLine'

/**
 * MingCute Icon: Planet Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PlanetLine = memo(Icon)
