export class Tag {
  static readonly JAVASCRIPT = new Tag('JavaScript', '#d9bd34');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#3078c6');
  static readonly ANGULAR = new Tag('Angular', '#dd0032');
  static readonly REACT = new Tag('React', '#0a7ea4');
  static readonly VUE = new Tag('Vue', '#42b883');
  static readonly NODEJS = new Tag('Node.js', '#046e01');
  static readonly PYTHON = new Tag('Python', '#134611');
  static readonly JAVA = new Tag('Java', '#7a736e');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
