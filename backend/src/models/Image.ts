import { model, Schema } from 'mongoose';

export interface Image {
   originalName: string,
   fileName: string,
   subtitle: string
}

const imageSchema = new Schema<Image>({
    originalName: { type: String, required: true },
    fileName: { type: String, required: true },
    subtitle: { type: String, required: true }
});

export default model<Image>('Image', imageSchema);
