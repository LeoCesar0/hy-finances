import { v4 as uuid } from "uuid";
import { firebaseUpsertData } from "./firebaseUpsertData";
import { getDataById } from "./getDataById";
import { FirebaseCollection } from "./collections";
import { AnyObject } from "@/schemas/anyObject";

type IFirebaseCreate = {
  collection: FirebaseCollection;
  data: AnyObject & { id: string };
};
export const firebaseCreate = async <T extends { id: string }>({
  collection: collectionName,
  data,
}: IFirebaseCreate): Promise<T | undefined> => {
  const id = data.id || uuid();
  await firebaseUpsertData(collectionName, data, id);
  const snapShot = await getDataById(collectionName, id);
  const updatedData = snapShot.data() as T | undefined;

  return updatedData;
};