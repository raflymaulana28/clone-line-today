export interface CategoryProps {
  data: CategoryItem[];
  activeIndex: number;
  handleCategory: (e: number) => void;
}
export interface CategoryItem {
  id: number;
  lastModTime: number;
  name: string;
  type: number;
}
