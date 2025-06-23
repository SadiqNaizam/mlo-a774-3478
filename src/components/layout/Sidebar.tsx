import React from 'react';
import SidebarFilters from '../Filters/SidebarFilters';

/**
 * Sidebar layout component for the BookMyShow application.
 *
 * This component acts as a container for the sidebar content. In the current
 * implementation, it directly renders the `SidebarFilters` organism.
 * This decision is based on the provided context where `SidebarFilters` is a self-contained
 * component that includes its own `<aside>` tag and all necessary styling (width, background, etc.).
 *
 * The component is designed to be placed within a parent grid layout, where it
 * will occupy the designated sidebar column.
 */
const Sidebar: React.FC = () => {
  return <SidebarFilters />;
};

export default Sidebar;
