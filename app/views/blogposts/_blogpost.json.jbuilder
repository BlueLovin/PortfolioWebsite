json.extract! blogpost, :id, :title, :category, :image_url, :thumbnail_url, :post, :created_at, :updated_at
json.url blogpost_url(blogpost, format: :json)
