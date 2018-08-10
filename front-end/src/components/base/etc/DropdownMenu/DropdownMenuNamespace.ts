namespace DropdownMenuNameSpace {
  export interface DropdownItem {
    id: string;
    name: string;
  }
  export interface DropdownMenuProps {
    title: string;
    data: DropdownItem[];
  }
}
