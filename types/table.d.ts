type HeadCell<DataType> = {
  id: Extract<keyof DataType, string>;
  label: string;
};

type EActionColumn = "Edit" | "Delete";

type TableProps<DataType> = {
  heads: HeadCell<DataType>[];
  actions?: {
    name: EActionColumn;
    callback: (item: DataType) => void;
  }[];
  useQuery: UseQuery;
};
