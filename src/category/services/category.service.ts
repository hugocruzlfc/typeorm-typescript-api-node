import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { CategoryEntity } from "../entities";
import { CategoryDTO } from "../dto";

export class CategoryService extends BaseService<CategoryEntity> {
  constructor() {
    super(CategoryEntity);
  }

  async findAllCategories(): Promise<CategoryEntity[]> {
    return (await this.execRepository).find();
  }
  async findCategoryById(id: string): Promise<CategoryEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }
  async createCategory(body: CategoryDTO): Promise<CategoryEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteCategory(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateCategory(
    id: string,
    infoUpdate: CategoryDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
