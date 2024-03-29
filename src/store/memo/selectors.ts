import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.memo;

export const MemoListSelector = createSelector(baseSelector, state =>
  [...state.memolist]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .filter(memo => memo.content.includes(state.search)),
);

export const SelectedMemoListSelector = createSelector(baseSelector, state =>
  state.memolist.find(memo => memo.selected),
);

export const SearchMemoSelector = createSelector(
  baseSelector,
  state => state.search,
);
