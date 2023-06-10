import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const MENUS: string[] = ['position', 'time', 'tree'];

export default function Menu() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        {MENUS.map(menu => (
          <NavigationMenu.Item key={menu}>
            <NavigationMenu.Link href={menu}>{menu}</NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
