import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import ActivityCardGrid from '../components/Activities/ActivityCardGrid';

/**
 * Renders the main Activities Overview page for BookMyShow.
 *
 * This page component orchestrates the overall layout by composing several
 * larger "organism" level components. It leverages the `MainAppLayout` to
 * provide the consistent application shell, including the header and sidebar.
 *
 * The main content of the page, the grid of activity cards, is provided by
 * the `ActivityCardGrid` component. This compositional approach keeps the page
 * component clean and focused on layout, while delegating content and
 * specific functionalities to the child components.
 */
const ActivitiesPage: React.FC = () => {
  return (
    <MainAppLayout>
      <ActivityCardGrid />
    </MainAppLayout>
  );
};

export default ActivitiesPage;
