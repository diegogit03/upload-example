import { model, Schema } from 'mongoose';

interface Image {
   filename: string,
   key: string,
   subtitle: string
}

const imageSchema = new Schema<Image>({
    filename: { type: String, required: true },
    key: { type: String, required: true },
    subtitle: { type: String, required: true }
});

export default model<Image>('Image', imageSchema);
