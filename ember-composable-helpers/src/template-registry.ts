import type AppendHelper from './helpers/append';
// import type ArrayHelper from './helpers/array';
import type CallHelper from './helpers/call';
import type ChunkHelper from './helpers/chunk';
import type CompactHelper from './helpers/compact';
import type ComputeHelper from './helpers/compute';
// import type ContainsHelper from './helpers/contains';
import type DecHelper from './helpers/dec';
import type DropHelper from './helpers/drop';
import type EntriesHelper from './helpers/entries';
import type FilterByHelper from './helpers/filter-by';
import type FilterHelper from './helpers/filter';
import type FindByHelper from './helpers/find-by';
import type FlattenHelper from './helpers/flatten';
import type FromEntriesHelper from './helpers/from-entries';
import type GroupByHelper from './helpers/group-by';
import type HasNextHelper from './helpers/has-next';
import type HasPreviousHelper from './helpers/has-previous';
import type IncHelper from './helpers/inc';
import type IncludesHelper from './helpers/includes';
import type IntersectHelper from './helpers/intersect';
import type InvokeHelper from './helpers/invoke';
import type JoinHelper from './helpers/join';
import type KeysHelper from './helpers/keys';
import type MapByHelper from './helpers/map-by';
import type MapHelper from './helpers/map';
import type NextHelper from './helpers/next';
import type NoopHelper from './helpers/noop';
import type ObjectAtHelper from './helpers/object-at';
import type OptionalHelper from './helpers/optional';
import type PickHelper from './helpers/pick';
import type PipeActionHelper from './helpers/pipe-action';
import type PipeHelper from './helpers/pipe';
import type PreviousHelper from './helpers/previous';
import type QueueHelper from './helpers/queue';
import type RangeHelper from './helpers/range';
import type ReduceHelper from './helpers/reduce';
import type RejectByHelper from './helpers/reject-by';
import type RepeatHelper from './helpers/repeat';
import type ReverseHelper from './helpers/reverse';
import type ShuffleHelper from './helpers/shuffle';
import type SliceHelper from './helpers/slice';
import type SortByHelper from './helpers/sort-by';
import type TakeHelper from './helpers/take';
import type ToggleActionHelper from './helpers/toggle-action';
import type ToggleHelper from './helpers/toggle';
import type UnionHelper from './helpers/union';
import type ValuesHelper from './helpers/values';
import type WithoutHelper from './helpers/without';

export default interface Registry {
  append: typeof AppendHelper;
  // array: typeof ArrayHelper;
  call: typeof CallHelper;
  chunk: typeof ChunkHelper;
  compact: typeof CompactHelper;
  compute: typeof ComputeHelper;
  // contains: typeof ContainsHelper;
  dec: typeof DecHelper;
  drop: typeof DropHelper;
  entries: typeof EntriesHelper;
  'filter-by': typeof FilterByHelper;
  filter: typeof FilterHelper;
  'find-by': typeof FindByHelper;
  flatten: typeof FlattenHelper;
  'from-entries': typeof FromEntriesHelper;
  'group-by': typeof GroupByHelper;
  'has-next': typeof HasNextHelper;
  'has-previous': typeof HasPreviousHelper;
  inc: typeof IncHelper;
  includes: typeof IncludesHelper;
  intersect: typeof IntersectHelper;
  invoke: typeof InvokeHelper;
  join: typeof JoinHelper;
  keys: typeof KeysHelper;
  'map-by': typeof MapByHelper;
  map: typeof MapHelper;
  next: typeof NextHelper;
  noop: typeof NoopHelper;
  'object-at': typeof ObjectAtHelper;
  optional: typeof OptionalHelper;
  pick: typeof PickHelper;
  'pipe-action': typeof PipeActionHelper;
  pipe: typeof PipeHelper;
  previous: typeof PreviousHelper;
  queue: typeof QueueHelper;
  range: typeof RangeHelper;
  reduce: typeof ReduceHelper;
  'reject-by': typeof RejectByHelper;
  repeat: typeof RepeatHelper;
  reverse: typeof ReverseHelper;
  shuffle: typeof ShuffleHelper;
  slice: typeof SliceHelper;
  'sort-by': typeof SortByHelper;
  take: typeof TakeHelper;
  'toggle-action': typeof ToggleActionHelper;
  toggle: typeof ToggleHelper;
  union: typeof UnionHelper;
  values: typeof ValuesHelper;
  without: typeof WithoutHelper;
}
