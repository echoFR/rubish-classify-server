import { Service } from 'egg';
export default class Home extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async voice_identify() {
    // const parts = this.ctx.multipart();
    // let stream;
    // const voicePath = path.join(targetPath, uuidv1());
    // while (!isEmpty((stream = await parts()))) {
    //   await pump(stream, fs.createWriteStream(voicePath));
    // }
    // const wavPath = await this.ctx.service.ffmpeg.voice2wav(voicePath);
    // const result = await this.ctx.service.xfyun.voiceTranslate(wavPath);
    // this.ctx.body = result;
    // if (+result.code !== 0) {
    //   this.ctx.status = 500;
    // }
  }
}

