

# How Canvas Works

 1. The foundation or the `data-layer` is static-items. Each static item represents 1 canvas drawable item. For `CanvasEditor` we have another group of classes `editor classes` which convert the static item into an object which has width/height etc etc for editing. Finally the `CanvasPlayer` (gets slideExtra ,items,assets) plays 1 slide at a time.

 <small>Remember the `data-layer` is not the database rather the base Schemas and static structs / objects.</small>

 2. Assest is part of this `slides` project and top level does not need to know about it.

 