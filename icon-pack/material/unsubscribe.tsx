import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20.4884 14.538V5.49805C20.4884 4.39805 19.5884 3.49805 18.4884 3.49805H4.49844C3.39844 3.49805 2.49844 4.39805 2.49844 5.49805V15.498C2.49844 16.598 3.39844 17.498 4.49844 17.498H14.5484C14.8284 19.418 16.6484 20.848 18.7284 20.428C20.0684 20.158 21.1584 19.058 21.4284 17.718C21.6784 16.478 21.2684 15.328 20.4884 14.538ZM18.4884 5.49805L11.4984 8.99805L4.49844 5.49805H18.4884ZM14.8484 15.498H4.49844V7.49805L11.4984 10.998L18.4984 7.49805V13.548C18.3384 13.528 18.1684 13.498 17.9984 13.498C16.6084 13.498 15.4084 14.318 14.8484 15.498ZM19.9984 17.498H15.9984V16.498H19.9984V17.498Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Unsubscribe'

/**
 * Material Icon: Unsubscribe
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:unsubscribe Material Icon Docs}
 */
export const Unsubscribe = memo(Icon)
