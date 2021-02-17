class BlogpostsController < ApplicationController
  before_action :set_blogpost, only: [:show, :edit, :update, :destroy]
  http_basic_authenticate_with :name => ENV["USER"], :password => ENV["PASSWORD"], except: :show

  # GET /blogposts
  # GET /blogposts.json
  def index
    @blogposts = Blogpost.all

  end

  # GET /blogposts/1
  # GET /blogposts/1.json
  def show
  end

  # GET /blogposts/new
  def new
    @blogpost = Blogpost.new
  end

  # GET /blogposts/1/edit
  def edit
  end

  # POST /blogposts
  # POST /blogposts.json
  def create
    @blogpost = Blogpost.new(blogpost_params)

    respond_to do |format|
      if @blogpost.save
        format.html { redirect_to @blogpost, notice: 'Blogpost was successfully created.' }
        format.json { render :show, status: :created, location: @blogpost }
      else
        format.html { render :new }
        format.json { render json: @blogpost.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogposts/1
  # PATCH/PUT /blogposts/1.json
  def update
    respond_to do |format|
      if @blogpost.update(blogpost_params)
        format.html { redirect_to @blogpost, notice: 'Blogpost was successfully updated.' }
        format.json { render :show, status: :ok, location: @blogpost }
      else
        format.html { render :edit }
        format.json { render json: @blogpost.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogposts/1
  # DELETE /blogposts/1.json
  def destroy
    @blogpost.destroy
    respond_to do |format|
      format.html { redirect_to blogposts_url, notice: 'Blogpost was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  # if request.env['PATH_INFO'] == '/blogposts/'
  #   http_basic_authenticate_with :name => "admin", :password => "secret"
  # end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blogpost
      @blogpost = Blogpost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blogpost_params
      params.require(:blogpost).permit(:title, :category, :image_url, :thumbnail_url, :post)
    end
end
