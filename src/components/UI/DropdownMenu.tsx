import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface MenuItemType {
    id: string;
    label: string;
    value: string;
}

interface DropdownMenuProps {
    menuItems: MenuItemType[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems, selectedValue, onSelect }) => {
    return (
        <Menu as="div" className="relative inline-block text-left p-4">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    {selectedValue || 'Options'}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 me-2 m-4 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden"
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.id}>
                        {({ active }) => (
                            <button
                                onClick={() => onSelect(item.value)}
                                className={`block w-full me-2 text-left px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                            >
                                {item.label}
                            </button>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};
export default DropdownMenu;