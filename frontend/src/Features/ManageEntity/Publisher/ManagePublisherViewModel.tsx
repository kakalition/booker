import PublisherEntity from '../../../Types/Entities/PublisherEntity';
import useEntityDataHolder from '../EntityDataHolder';

export default function useManagePublisherViewModel() {
  const dataHolder = useEntityDataHolder<PublisherEntity>();
}
