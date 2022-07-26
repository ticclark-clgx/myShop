export interface Post {
    "id",
    "Main" : {
      "title" : {
        "type" : "StructuredText",
        "config" : {
          "single" : "heading1",
          "label" : "Title",
          "placeholder" : "Blog post title..."
        }
      },
      "release_date" : {
        "type" : "Date",
        "config" : {
          "label" : "Release Date"
        }
      },
      "author" : {
        "type" : "Link",
        "config" : {
          "select" : "document",
          "label" : "Author",
          "placeholder" : "Link to an author document"
        }
      },
      "body" : {
        "type" : "Slices",
        "fieldset" : "Slice zone",
        "config" : {
          "choices" : {
            "text" : {
              "type" : "Slice",
              "fieldset" : "Text",
              "description" : "A rich text section",
              "icon" : "text_fields",
              "non-repeat" : {
                "text" : {
                  "type" : "StructuredText",
                  "config" : {
                    "multi" : "paragraph,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,list-item,o-list-item",
                    "allowTargetBlank" : true,
                    "label" : "Text",
                    "placeholder" : "Enter your text..."
                  }
                }
              },
              "repeat" : { }
            },
            "quote" : {
              "type" : "Slice",
              "fieldset" : "Quote",
              "description" : "A featured quote",
              "icon" : "format_quote",
              "non-repeat" : {
                "quote" : {
                  "type" : "StructuredText",
                  "config" : {
                    "single" : "paragraph,strong,em",
                    "label" : "quote",
                    "placeholder" : "Enter quote..."
                  }
                }
              },
              "repeat" : { }
            },
            "image" : {
              "type" : "Slice",
              "fieldset" : "Image",
              "description" : "An image with optional caption",
              "icon" : "image",
              "non-repeat" : {
                "image" : {
                  "type" : "Image",
                  "config" : {
                    "constraint" : { },
                    "thumbnails" : [ ],
                    "label" : "Image"
                  }
                },
                "caption" : {
                  "type" : "StructuredText",
                  "config" : {
                    "single" : "paragraph,strong,em,hyperlink",
                    "allowTargetBlank" : true,
                    "label" : "Caption",
                    "placeholder" : "Optional image caption..."
                  }
                }
              },
              "repeat" : { }
            }
          }
        }
      }
    }
  }

