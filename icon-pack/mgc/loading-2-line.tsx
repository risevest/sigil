import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Use, Defs, Pattern, Image } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <Defs>
        <Pattern id="b" width="100%" height="100%" patternUnits="objectBoundingBox">
          <Use xlinkHref="#a" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAACl0lEQVQ4EZ2US3IUMRBEsyR197QxDoIljiC88I4lF/AWjsBVOAA3gst46wPYAXjGLal4peGz9dCfmdCnsjKzSm3r9UfXidfj7deiq5tJ37dJZ6+KnnrRzrI2L+lELLn8s/Q+6ell0sWaVH/kP2CaD/lkwP3tty+6epm1r0UHL1ryYKYZhm3N5VSG0k3W45x1nrKykDtPmgCuysuk/wC8XrP6VmT4tz+CLdmLqxevOZ0kmWIk3T8CtPLmWaVNS0qzb2lW6pPnPp0o+d2kZZnldaekZTbEWi2ekNyoR87pNMDXb3eU+WxZ6urBrPokUQzDT6XkrT5f8pC76oJyXPRWzr3phXte3dNKIy/xAjw/n+Hlh8tp7m96BDqsEmTMTQzGa/zJVNzVRusYYuIZP0b/eme9se3A9N280yd5umPloAy/1rsZIyXX+K8DJhg+HUGAlnUbQATQF8zswX8g4g7gSyfeZA9dvreUNsZNvTNMJA9w8wIxAGMg1ARba+6+AXQA5JGFe+juAVoYX5CRAtuEwkPztEGwMRVxAcqhNtuGPCZHxjG2jUQHN/vJ2oE9MMEe0y7RJwGKdZjomSQVtBb2BNtCANQJGFk8jAiwjRDk4hfSie8wYdpoE82chhagx0c0oFWAWwOHIwPDIfXoGx4CauFrMK8YX/GS2yBEOcwn5EOK1YFIIm5sSslEY1sEBmXDiyNDNpLEgm0lLLyFMFHmAPJBQD5t3Hv0AmbSPRAkIS6G5Br6SRY+VBgHyBEMoylhZ3dgRhCyQzzFZH9yLz1Bg8lYjCcY/gNzGAWrMDh8AyyQfr8EeHxMkA6bOL8xERmZHU1HFvCHXFgNhuENYLSAaAcLUHb8vUZhAgxygIZMPgm0diYmszH/Aik0fpjBkoTJAAAAAElFTkSuQmCC"
          id="a"
          width="20"
          height="20"
        />
      </Defs>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13 21a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0zm0-15a1 1 0 1 1-2 0V3a1 1 0 1 1 2 0zm9 6a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1M6 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm13.071 8.071a1 1 0 0 0 0-1.414l-2.121-2.121a1 1 0 0 0-1.414 1.414l2.12 2.121a1 1 0 0 0 1.415 0M8.464 7.051A1 1 0 1 1 7.05 8.463L4.93 6.344a1 1 0 1 1 1.414-1.415l2.12 2.121Zm10.607-2.122a1 1 0 0 0-1.414 0L15.536 7.05a1 1 0 0 0 1.414 1.414l2.121-2.12a1 1 0 0 0 0-1.415M7.051 15.536a1 1 0 1 1 1.413 1.414l-2.12 2.121a1 1 0 0 1-1.415-1.414z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Loading2Line'

/**
 * MingCute Icon: Loading 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Loading2Line = memo(Icon)
